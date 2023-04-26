import Footer from '../components/Footer'
import Header from '../components/Header'

const Default = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer msg='Footer teste ' />
        </>
    )
}

export default Default