import { Button, Box, Card, Typography  } from "@mui/material";



export const VCard = () => {
    return(
        <Box maxWidth="sm" className="text-white">
            <Card className="shadow appearance-none bg-transparent">
                <Typography variant="h4" className="text-washed text-center">VCard QR Code</Typography>
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box className="mb-3 flex flex-col gap-2 mx-auto">
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="fname" required value="" placeholder="Enter First Name"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="lname" required value="" placeholder="Enter Last Name"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="mail" required value="" placeholder="Enter Email Address"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" id="phone" required value="" placeholder="Enter Phone number"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="company" required value="" placeholder="Enter your company"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="job" required value="" placeholder="Enter your job"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="street" required value="" placeholder="Enter Street"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="city" required value="" placeholder="Enter City"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="state" required value="" placeholder="Enter State"/>                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="url" required value="" placeholder="Enter your company"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="country" required value="" placeholder="Enter Country"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="website" required value="" placeholder="Enter website"/>
                    </Box>
                    <Box className="text-center">
                        <Button variant="contained" className="my-4 bg-burnt text-white hover:bg-washed font-light py-2 px-4 rounded">
                            Generate QR Code
                        </Button>
                    </Box>
                </form>      
            </Card>
           
        </Box>
    )
}