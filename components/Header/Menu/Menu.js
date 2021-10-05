import {Container, Menu, Icon, Label, Grid} from "semantic-ui-react";
import Link from "next/link";
export default function MenuWeb() {
    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuProductos />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOptions />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}


function MenuProductos(){
    return(
        <Menu>
            <Link href="/categorias"> 
                <Menu.Item as="a">Categorias</Menu.Item>
            </Link>
            <Link href="/contacto"> 
                <Menu.Item as="a">Contacto</Menu.Item>
            </Link>
            <Link href="/nosotros"> 
                <Menu.Item as="a">Nosotros</Menu.Item>
            </Link>
        </Menu>
    );
}


function MenuOptions(){
    return (
        <Menu>
            <Menu.Item>
                <Icon name="user outline"/>
                Mi Cuenta
            </Menu.Item>
        </Menu>

    );
}
