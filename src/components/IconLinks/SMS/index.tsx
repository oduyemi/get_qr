
import { Button, Box, Card, Typography  } from "@mui/material";


export const SMS = () => {
    return(
        <Box maxWidth="sm" className="text-white">
            <Card className="shadow appearance-none bg-transparent mt-8">
                <Typography variant="h4" className="text-washed text-center">SMS QR Code</Typography>
                <form className="mt-2 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <Box className="mb-3 flex flex-col gap-2 mx-auto">
                    <input className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="phone" id="phone" required value="" placeholder="Enter Your Phone Number"/>
                    <textarea className=" shadow appearance-none border rounded w-2/3 py-2 px-3 mx-auto text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="sms" required value="" placeholder="Enter your text here"></textarea>
                    
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