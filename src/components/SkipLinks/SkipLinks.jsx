import "./SkipLinks.scss"
import {Box} from "@mui/material";
import Link from "@mui/material/Link";

const SkipLinks = ({links}) => {
    return (
        <Box className="skiplinks-container">
            {links.map((link, index) => (
                <Link href={link['1']} key={index} sx={{display: "block", p:1}}>
                    {link['0']}
                </Link>
            ))}
        </Box>
    )
}

export default SkipLinks;