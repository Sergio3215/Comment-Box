// middleware.ts
import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { URL } from 'next/dist/compiled/@edge-runtime/primitives/url';

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
    const token = req.cookies.get('Token');
    const pathName = req.nextUrl.pathname;

    if(pathName == '/'){
        if(token == undefined){
            return NextResponse.redirect(new URL('/account/login', req.url))
        }
        
        const { payload } = await jwtVerify(token, new TextEncoder().encode(process.env.palabraSecreta));
        // console.log(payload)
    }

    if(token != undefined && pathName != '/' ){
        return NextResponse.redirect(new URL('/', req.url))
    }


  //return NextResponse.redirect(new URL('/about-2', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/account/:path*','/']
}