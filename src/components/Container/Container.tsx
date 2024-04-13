import { FC, ReactNode } from 'react'

interface Children {
    children: ReactNode
}

const Container: FC<Children> = ({ children }) => {
    return (
        <section className='container'>
            {children}
        </section>
    )
}

export default Container
