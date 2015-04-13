class TbMensagem < ActiveRecord::Base
  belongs_to :remetente, :class_name => 'TbUsuario'
  belongs_to :destinatario, :class_name => 'TbUsuario'
end
