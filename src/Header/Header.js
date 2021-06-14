import '../Header/header.css'

export const Header = (props) => {

    return (
        <div className='hdr'>
            <code onClick={() => props.return(null)}>Riken Morti Wiki</code>
        </div>
    )
}