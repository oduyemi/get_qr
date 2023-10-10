import { Box, Typography, Grid } from "@mui/material";
import Icon from '@mdi/react';
import { mdiWeb } from '@mdi/js';
import { mdiCardAccountDetailsOutline } from '@mdi/js';
import { mdiTextBoxMultipleOutline } from '@mdi/js';
import { mdiEmailOutline } from '@mdi/js';
import { mdiMessageProcessing } from '@mdi/js';
import { mdiWifi } from '@mdi/js';
import { mdiAlphaX } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiFilePdfBox } from '@mdi/js';
import { mdiImageMultiple } from '@mdi/js';
import Link from "next/link";

export const Icons = () => {
        
    return(
        <Box maxWidth="xl" className="px-7 mx-auto relative flex justify-between">
            <Box maxWidth="xl" className="my-auto mx-auto mt-8 mb-14">
                <Grid sx={{ display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap" }}>
                    <Link href="/">
                        <Grid sx={{ display:"flex"}} className="mx-4">
                            <Icon path={mdiWeb} size={1.2} />
                            <Typography variant="h6" className="text-xs mt-2 mx-2">URL</Typography>
                        </Grid>
                    </Link>
                    
                    <Link href="/v-card">
                        <Grid sx={{ display:"flex" }} className="mx-4">
                            <Icon path={mdiCardAccountDetailsOutline} size={1.2} />
                            <Typography variant="h6" className="text-xs mt-2 mx-2">VCARD</Typography>
                        </Grid>
                    </Link>
                    
                    <Link href="/text">
                        <Grid sx={{ display:"flex" }} className="mx-4">
                            <Icon path={mdiTextBoxMultipleOutline} size={1.2} />
                            <Typography variant="h6" className="text-xs mt-2 mx-2">TEXT</Typography>
                        </Grid>
                    </Link>
                   
                   <Link href="/email">
                        <Grid sx={{ display:"flex" }} className="mx-4">
                            <Icon path={mdiEmailOutline} size={1.2} />
                            <Typography variant="h6" className="text-xs mt-2 mx-2">E-MAIL</Typography>
                        </Grid>
                   </Link>
                    
                    <Link href="/sms">
                        <Grid sx={{ display:"flex" }} className="mx-4">
                            <Icon path={mdiMessageProcessing} size={1.2} />
                            <Typography variant="h6" className="text-xs mt-2 mx-2">SMS</Typography>
                        </Grid>
                    </Link>
                </Grid>
            </Box>
        </Box>
    );
}
