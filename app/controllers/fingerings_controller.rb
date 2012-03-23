class FingeringsController < ApplicationController
  before_filter :login_required
  
  def index
    @fingerings = Fingering.all

    respond_to do |format|
      format.html
      format.json { render json: @fingerings }
    end
  end

  def show
    @fingering = Fingering.find(params[:id])

    respond_to do |format|
      format.html
      format.json { render json: @fingering }
    end
  end

  def new
    @fingering = Fingering.new(params[:fingering])

    respond_to do |format|
      format.html
      format.json { render json: @fingering }
    end
  end

  def create
    @fingering = Fingering.create!(params[:fingering])
    flash[:notice] = "Fingering submitted for approval."

    respond_to do |format|
      if @fingering.save
        format.html { redirect_to fingerings_url, notice: 'Fingering was successfully created.' }
        format.json { render json: @fingering, status: :created, location: @fingering }
      else
        format.html { render action: "new" }
        format.json { render json: @fingering.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
    @fingering = Fingering.find(params[:id])
  end

  def update
    @fingering = Fingering.find(params[:id])

    respond_to do |format|
      if @fingering.update_attributes(params[:fingering])
        format.html { redirect_to @fingering, notice: 'Fingering was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @fingering.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @fingering = Fingering.find(params[:id])
    @fingering.destroy

    respond_to do |format|
      format.html { redirect_to fingerings_url }
      format.json { head :no_content }
    end
  end
end
