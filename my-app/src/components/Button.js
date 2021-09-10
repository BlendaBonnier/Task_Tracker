import PropTypes from 'prop-types' //secure the rigth format for prop aka string/bolean etc

const Button = ({ color, text, onClick}) => {


    return (
            <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
                {text}
            </button>

    )
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
