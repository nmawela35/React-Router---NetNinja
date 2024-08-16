import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div>
        <h2>Page not found!</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dicta voluptatem dolor voluptates totam velit possimus in ipsam magnam ducimus.</p>

        <p>Go to <Link to="/">Homepage</Link>...</p>
        
    </div>
  )
}

export default NotFound