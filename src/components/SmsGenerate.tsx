import { Box, Card, Grid, Button } from "@mui/material";
import { SMS } from "./IconLinks/SMS";
import Icon from '@mdi/react';
import { mdiTrayArrowDown } from '@mdi/js';
import Image from "next/image";





export const SmsGenerate = () => {
    return(
        <Box maxWidth="xl" sx={{ display:"flex", alignItems:"center", justifyContent:"center" }} className="">
           <Grid maxWidth="md">
                <SMS />
            </Grid>
            <Grid>
                <Box maxWidth="sm" className="ms-14 mt-8 border border-1 w-full">
                    <Card className="shadow appearance-none bg-transparent">
                        <Image
                            src="/assets/images/qr_preview.png"
                            alt="Preview"
                            width={120}
                            height={120}
                            className="h-40 w-40 object-contain mt-4 mx-auto"
                        />
                    </Card>
                    <Box className="text-center">
                        <Button variant="contained" className="my-8 bg-burnt text-white hover:bg-washed font-light py-2 px-4 rounded">
                            <span><Icon path={mdiTrayArrowDown} size={1} /></span>
                            &emsp; Download
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </Box>
    )
}