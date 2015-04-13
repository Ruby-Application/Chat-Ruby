class TbMensagemsController < ApplicationController
  before_action :set_tb_mensagem, only: [:show, :edit, :update, :destroy]

  # GET /tb_mensagems
  # GET /tb_mensagems.json
  def index
    @tb_mensagems = TbMensagem.all
  end

  # GET /tb_mensagems/1
  # GET /tb_mensagems/1.json
  def show
  end

  # GET /tb_mensagems/new
  def new
    @tb_mensagem = TbMensagem.new
  end

  # GET /tb_mensagems/1/edit
  def edit
  end

  # POST /tb_mensagems
  # POST /tb_mensagems.json
  def create
    @tb_mensagem = TbMensagem.new(tb_mensagem_params)

    respond_to do |format|
      if @tb_mensagem.save
        format.html { redirect_to @tb_mensagem, notice: 'Tb mensagem was successfully created.' }
        format.json { render :show, status: :created, location: @tb_mensagem }
      else
        format.html { render :new }
        format.json { render json: @tb_mensagem.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tb_mensagems/1
  # PATCH/PUT /tb_mensagems/1.json
  def update
    respond_to do |format|
      if @tb_mensagem.update(tb_mensagem_params)
        format.html { redirect_to @tb_mensagem, notice: 'Tb mensagem was successfully updated.' }
        format.json { render :show, status: :ok, location: @tb_mensagem }
      else
        format.html { render :edit }
        format.json { render json: @tb_mensagem.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tb_mensagems/1
  # DELETE /tb_mensagems/1.json
  def destroy
    @tb_mensagem.destroy
    respond_to do |format|
      format.html { redirect_to tb_mensagems_url, notice: 'Tb mensagem was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_tb_mensagem
      @tb_mensagem = TbMensagem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def tb_mensagem_params
      params.require(:tb_mensagem).permit(:texto, :dt_envio, :tb_usuario_id, :tb_usuario_id)
    end
end
