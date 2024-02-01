import Header from "./Header"
import SecUser from "./SecUser"
import SecCards from "./SecCards"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { ExampleContext } from "../../providers/UserContext"


function DashSec() {
    // const api get() Nome etc
    const { localUser } = useContext(ExampleContext)

//   console.log(localUser.techs)

    return (

        <>
            <Header />

            <main className="container dash">
                {
                    localUser ? <SecUser localUser={localUser} /> : null
                }

                <SecCards />
            </main>
        </>
    )
}
export default DashSec
