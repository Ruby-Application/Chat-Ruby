class TbUsuariosController < ApplicationController
  before_action :set_tb_usuario, only: [:show, :edit, :update, :destroy]

  # GET /tb_usuarios
  # GET /tb_usuarios.json
  def index
    @tb_usuarios = TbUsuario.all
  end

  # GET /tb_usuarios/1
  # GET /tb_usuarios/1.json
  def show
  end

  # GET /tb_usuarios/new
  def new
    @tb_usuario = TbUsuario.new
  end

  # GET /tb_usuarios/1/edit
  def edit
  end

  # POST /tb_usuarios
  # POST /tb_usuarios.json
  def create
    @tb_usuario = TbUsuario.new(tb_usuario_params)

    respond_to do |format|
      if @tb_usuario.save
        format.html { redirect_to @tb_usuario, notice: 'Tb usuario was successfully created.' }
        format.json { render :show, status: :created, location: @tb_usuario }
      else
        format.html { render :new }
        format.json { render json: @tb_usuario.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tb_usuarios/1
  # PATCH/PUT /tb_usuarios/1.json
  def update
    respond_to do |format|
      if @tb_usuario.update(tb_usuario_params)
        format.html { redirect_to @tb_usuario, notice: 'Tb usuario was successfully updated.' }
        format.json { render :show, status: :ok, location: @tb_usuario }
      else
        format.html { render :edit }
        format.json { render json: @tb_usuario.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tb_usuarios/1
  # DELETE /tb_usuarios/1.json
  def destroy
    @tb_usuario.destroy
    respond_to do |format|
      format.html { redirect_to tb_usuarios_url, notice: 'Tb usuario was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tb_usuario
      @tb_usuario = TbUsuario.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tb_usuario_params
      params.require(:tb_usuario).permit(:nm_usuario, :email, :senha)
    end
end
