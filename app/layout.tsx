import ' @styles/globals.css';

export const metadata = {
    title: 'PromptMania',
    description: 'Get the best prompts from people from around the globe'
}

const RootLayout = () => {
    return (
        <html lang='en'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                {children}
                </main>

            </body>
        </html>
    )
}

export default RootLayout