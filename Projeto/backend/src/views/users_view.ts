import User from "../models/User";

// User Resolver
export default {
  render(user: User) {
    return {
      id: user.id,
      username: user.username,
      email: user.email,
      CPF: user.CPF,
      nascimento: user.nascimento,
      telefone: user.telefone,
      num_cartão: user.num_cartão,
      tipo_cartão: user.tipo_cartão,
      password: user.password,
      admin_rights: user.admin_rights,
    };
  },
};