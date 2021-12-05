import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/Events/createEvent' && !req.cookies.token) {
        return NextResponse.redirect('/User/Login')
    }
    return NextResponse.next()
}