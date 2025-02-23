import { Link, NavLink } from 'react-router-dom'

const Button = ({ children, path ,...classes }) => {
  return (
    <button { ...classes } { ...path } type='submit'>
        { children }
    </button>
  )
}

export default Button