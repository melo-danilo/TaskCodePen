class DataUser extends React.Component {

  handleRemoveClick(e) {
    const { onRemove } = this.props;
    const { id, nome, idade } = this.props;

    onRemove({ id: id, nome: nome, idade: idade });
  }

  handleEditClick(e) {
    const { onEdit } = this.props;
    const { id, nome, idade } = this.props;

    onEdit({ id: id, nome: nome, idade: idade });
  }


  render() {
    const { id, nome, idade } = this.props;
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement("tr", { key: id }, /*#__PURE__*/
      React.createElement("td", null, id), /*#__PURE__*/
      React.createElement("td", null, nome), /*#__PURE__*/
      React.createElement("td", null, idade), /*#__PURE__*/
      React.createElement("td", null, /*#__PURE__*/
      React.createElement("input", {
        type: "submit",
        name: "edita",
        class: "submit action-button",
        value: "Editar",
        onClick: this.handleEditClick.bind(this) }), /*#__PURE__*/

      React.createElement("input", {
        type: "submit",
        name: "remove",
        class: "submit action-button-del",
        value: "Excluir",
        onClick: this.handleRemoveClick.bind(this) })))));





  }}


class NewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      setId: null,
      setNome: null,
      setIdade: null };

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        setId: nextProps.editUser.id,
        setNome: nextProps.editUser.nome,
        setIdade: nextProps.editUser.idade });

    }
  }

  handleChangeNome(e) {
    const { setNome } = this.state;

    this.setState({
      setNome: e.target.value });

  }

  handleChangeIdade(e) {
    const { setIdade } = this.state;

    this.setState({
      setIdade: e.target.value });

  }

  handleAdddUserClick(e) {
    const { onNewUser } = this.props;
    const { setNome, setIdade } = this.state;

    onNewUser({ setNome: setNome, setIdade: setIdade });

    this.setState({
      setNome: "",
      setIdade: "" });

  }

  handleSalvarUsuarioClick(e) {
    const { onEditUser, editUser } = this.props;
    const { setId, setNome, setIdade } = this.state;

    onEditUser({
      setId: setId,
      setNome: setNome,
      setIdade: setIdade,
      oldId: editUser.id,
      oldNome: editUser.nome,
      oldIdade: editUser.idade });

    this.setState({
      setNome: "",
      setIdade: "" });

  }

  render() {
    const { userEdit, edit } = this.props;
    const { setId, setNome, setIdade } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "form-container" }, /*#__PURE__*/
      React.createElement("form", { id: "mform" }, /*#__PURE__*/
      React.createElement("fieldset", null, /*#__PURE__*/
      React.createElement("h2", { class: "title" }, "Evolutto"), /*#__PURE__*/
      React.createElement("h3", { class: "subtitle" }, "Usu\xE1rios"), /*#__PURE__*/
      React.createElement("input", {
        id: "inputNome",
        type: "text",
        className: "input-nome",
        placeholder: "Nome",
        onChange: this.handleChangeNome.bind(this),
        value: setNome }), /*#__PURE__*/

      React.createElement("input", {
        id: "inputIdade",
        type: "text",
        className: "input-idade",
        placeholder: "Idade",
        onChange: this.handleChangeIdade.bind(this),
        value: setIdade }),

      edit ? /*#__PURE__*/
      React.createElement("input", {
        type: "button",
        name: "submit",
        class: "submit action-button-save",
        value: "Salvar",
        onClick: this.handleSalvarUsuarioClick.bind(this) }) : /*#__PURE__*/


      React.createElement("input", {
        type: "button",
        name: "submit",
        class: "submit action-button",
        value: "Adicionar",
        onClick: this.handleAdddUserClick.bind(this) })))));






  }}


class MinhaApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: props.users,
      count: 0 };

  }

  handleNewUser(user) {
    const { users, count } = this.state;

    users.push({
      id: count + 1,
      nome: user.setNome,
      idade: user.setIdade });


    this.setState({ users: users, count: count + 1 });
  }

  handleClickEditUser(user) {
    const { users } = this.state;

    this.setState({ edit: true, editUser: user });
  }

  handleRemoveUser(user) {
    const { users } = this.state;

    let newUsers = users.filter(function (newUser) {
      return newUser.id !== user.id;
    });

    this.setState({ users: newUsers, edit: null, editUser: null, setNome: "", setIdade: "" });
  }

  handleEditUser(user) {
    const { users } = this.state;

    let newUsers = users.map(newUser => {
      if (newUser.id == user.oldId) {
        newUser.nome = user.setNome;
        newUser.idade = user.setIdade;
      }
      return newUser;
    });

    this.setState({ edit: null, editUser: null, usuarios: newUsers });
  }

  render() {
    const { setId, setNome, setIdade, edit, editUser, users } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "minha-app" }, /*#__PURE__*/
      React.createElement(NewForm, {
        onNewUser: this.handleNewUser.bind(this),
        onEditUser: this.handleEditUser.bind(this),
        edit: edit,
        editUser: editUser }), /*#__PURE__*/


      React.createElement("div", { className: "user-container" }, /*#__PURE__*/
      React.createElement("div", { id: "data" }, /*#__PURE__*/
      React.createElement("fieldset", null, /*#__PURE__*/
      React.createElement("h2", { className: "title" }, "Usu\xE1rios"), /*#__PURE__*/
      React.createElement("div", { className: "tbl-header" }, /*#__PURE__*/
      React.createElement("table", { cellpadding: "0", cellspacing: "0", border: "0" }, /*#__PURE__*/
      React.createElement("thead", null, /*#__PURE__*/
      React.createElement("tr", null, /*#__PURE__*/
      React.createElement("th", null, "id"), /*#__PURE__*/
      React.createElement("th", null, "Nome"), /*#__PURE__*/
      React.createElement("th", null, "Idade"), /*#__PURE__*/
      React.createElement("th", null, "A\xE7\xE3o"))))), /*#__PURE__*/




      React.createElement("div", { className: "tbl-content" }, /*#__PURE__*/
      React.createElement("table", { cellpadding: "0", cellspacing: "0", border: "0" }, /*#__PURE__*/
      React.createElement("tbody", null,
      this.state.users.map(user => {
        return /*#__PURE__*/React.createElement(DataUser, {
          id: user.id,
          nome: user.nome,
          idade: user.idade,
          onEdit: this.handleClickEditUser.bind(this),
          onRemove: this.handleRemoveUser.bind(this) });

      })))))))));









  }}


let users_data = [];

container = document.getElementById("app");
ReactDOM.render( /*#__PURE__*/React.createElement(MinhaApp, { users: users_data }), container);