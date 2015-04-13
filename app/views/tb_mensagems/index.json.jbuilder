json.array!(@tb_mensagems) do |tb_mensagem|
  json.extract! tb_mensagem, :id, :texto, :dt_envio, :tb_usuario_id, :tb_usuario_id
  json.url tb_mensagem_url(tb_mensagem, format: :json)
end
