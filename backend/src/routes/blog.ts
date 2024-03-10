import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@charik/medium-common'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
        JWT_SECRET: string
    },
    Variables: {
        userID: string
    }
}>();

blogRouter.use('/*', async (c, next) => {
    try {
        const authHeader = c.req.header('authorization') || ""
        const user = await verify(authHeader, c.env.JWT_SECRET)
        if(user){
            c.set('userID', user.id)
            await next()
        }
        else{
            c.status(403)
            return c.text('unauthorised')
        }
    }
    catch (e){
        c.status(403)
        return c.text('unauthorised')
    }
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const {success} = createBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Input not correct"
        })
    }
    const authorId = c.get('userID')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: authorId
        }
    })
    return c.json({
        id: blog.id
    })
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const {success} = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({
            message: "Input not correct"
        })
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog = await prisma.post.update({
        where: {
            id: body.id
        },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return c.json({
        id: blog.id
    })
})

//Todo: add pagination
blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs = await prisma.post.findMany()
    return c.json({blogs})
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blog  = await prisma.post.findFirst({
        where: {
            id: c.req.param('id')
        }
    })
    if(!blog){
        c.status(404)
        return c.json({
            message: 'Blog not found'
        })
    }
    return c.json({
        title: blog.title
    })
})