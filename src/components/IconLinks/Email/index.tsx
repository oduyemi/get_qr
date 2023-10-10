import { Button, Box, Card, Typography  } from "@mui/material";



export const Email = () => {
    return(
        <Box maxWidth="sm" className="text-white">
            <Card className="shadow appearance-none bg-transparent mt-8">
                <Typography variant="h4" className="text-washed text-center">Email QR Code</Typography>
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box className="mb-3 flex flex-col gap-2 mx-auto">
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="mail" required value="" placeholder="Enter Your Email"/>
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="subject" required value="" placeholder="Enter Your Email Subject"/>
                    <textarea className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="message" required value="" placeholder="Enter your message"></textarea>
                    
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