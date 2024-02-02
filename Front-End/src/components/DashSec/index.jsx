import Header from "./Header"
import SecUser from "./SecUser"
import SecCards from "./SecCards"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ExampleContext } from "../../providers/UserContext"


function DashSec() {
    // const api get() Nome etc
    const {   userClient } = useContext(ExampleContext)
    // console.log(clientGet.name)

    // console.log(userClient)
    //   console.log(localUser.techs)

    return (

        <>
            <Header />

            <main className="container dash">
                {
                    userClient ? <SecUser userClient={userClient} /> : null
                }

                <SecCards />
            </main>
        </>
    )
}
export default DashSec
