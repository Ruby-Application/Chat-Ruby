json.array!(@tb_usuarios) do |tb_usuario|
  json.extract! tb_usuario, :id, :nm_usuario, :email, :senha
  json.url tb_usuario_url(tb_usuario, format: :json)
end
