import './Breadcrumb.scss';
import {Breadcrumbs, Container} from "@mui/material";
import Link from '@mui/material/Link';

const Breadcrumb = ({links}) => {
    return (
        <Container maxWidth="xl">
            <Breadcrumbs aria-label="breadcrumb" sx={{color: 'primary.main'}}>
                {links.map((link, index) => (
                    <Link underline="hover" href={link['1']} key={index} {...(index === links.length - 1) ? {"aria-current": "page"} : {}}>
                        {link['0']}
                    </Link>
                ))}
            </Breadcrumbs>
        </Container>
    )
}

export default Breadcrumb;