import Button from './Button'

const Header = (props) => {
    const onClick = (e) =>{
        console.log('click')
    }

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color='black' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker',
}

export default Header
