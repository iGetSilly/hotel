import LinkNav from "../components/linkNav"
import NavBar from "../components/navBar"

export default function Page() {
  return <div>
    <NavBar>
      <LinkNav>
        Cadastrar Cliente
      </LinkNav>
      <LinkNav>
        Cadastrar Produto
      </LinkNav>
      <LinkNav>
        Listar Clientes
      </LinkNav>
      <LinkNav>
        Listar Produtos
      </LinkNav>
    </NavBar>
  </div>
}