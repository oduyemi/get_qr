import { Button, Box, Card } from "@mui/material";



export const URL = () => {
    return(
        <Box maxWidth="sm" className="text-white mt-14">
            <Card className="shadow appearance-none bg-transparent">
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <input className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="url" required value="" placeholder="Enter your website"/>
                    <Box className="text-center">
                        <Button variant="contained" className="my-8 bg-burnt text-white hover:bg-washed font-light py-2 px-4 rounded">
                            Generate QR Code
                        </Button>
                    </Box>
                </form> 

            </Card>   
           
        </Box>
    )
}