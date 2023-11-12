// import theme style scss file
import 'styles/theme.scss';

export const metadata = {
    title: 'GeoCommons',
    description: 'GeoCommons',
    keywords: 'Dash UI, Next.js 13, Admin dashboard, admin template, web apps, bootstrap 5, admin theme'
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className='bg-light'>
                {children}
            </body>
        </html>
    )
}
