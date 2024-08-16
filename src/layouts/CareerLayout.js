import { Outlet } from "react-router-dom"

function CareerLayout() {
  return (
    <div>
        <h1>Careers page</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas debitis quibusdam deserunt repellat hic molestias ipsum commodi aut odit!</p>

        <Outlet/>

    </div>
  )
}

export default CareerLayout