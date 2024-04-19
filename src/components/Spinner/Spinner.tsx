import { FC } from 'react'
import { ThreeDots } from 'react-loader-spinner'

const Spinner: FC = () => {
    return (
        <section className='spinner'>
            <ThreeDots
                visible={true}
                height="50"
                width="50"
                color="red"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </section>
    )
}

export default Spinner
