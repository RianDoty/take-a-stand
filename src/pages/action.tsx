import authcards from '../assets/authcards.pdf'

export default function Action() {

    return (
        <>
            <h2>
                Just 30% of workers need to sign cards saying 
                they want to form a union to trigger an election.
            </h2>
            <p>
                Educate workers around you about their right to
                unionize! Not to mention, you can also hand out
                these handy dandy cards:
            </p>
            <a href={authcards}>Auth Cards PDF</a><br/>
            <div className='inverted'>
            <p>
                As well as that, a step-by-step guide on how to start
                a union can be found here:
            </p>
            <a href='https://www.ufcw.org/start-a-union/' style={{color: 'lightblue'}}>How to Start a Union</a>
            </div>
            <p>
                Additionally, a TED Talk on the dangers of Union Busting &
                Wage Theft can be found here:
            </p>
            <a href="https://drive.google.com/file/d/1sAGa9Ox4_EDKhEMdtcGS6zs8LjReJDd_/view?usp=share_link">TED Talk</a>
        </>
    )
}