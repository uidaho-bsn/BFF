class FingeringsController < ApplicationController
  # GET /fingerings
  # GET /fingerings.json
  def index
    @fingerings = Fingering.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @fingerings }
    end
  end

  # GET /fingerings/1
  # GET /fingerings/1.json
  def show
    @fingering = Fingering.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @fingering }
    end
  end

  # GET /fingerings/new
  # GET /fingerings/new.json
  def new
    @fingering = Fingering.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @fingering }
    end
  end

  # GET /fingerings/1/edit
  def edit
    @fingering = Fingering.find(params[:id])
  end

  # POST /fingerings
  # POST /fingerings.json
  def create
    @fingering = Fingering.new(params[:fingering])

    respond_to do |format|
      if @fingering.save
        format.html { redirect_to @fingering, notice: 'Fingering was successfully created.' }
        format.json { render json: @fingering, status: :created, location: @fingering }
      else
        format.html { render action: "new" }
        format.json { render json: @fingering.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /fingerings/1
  # PUT /fingerings/1.json
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

  # DELETE /fingerings/1
  # DELETE /fingerings/1.json
  def destroy
    @fingering = Fingering.find(params[:id])
    @fingering.destroy

    respond_to do |format|
      format.html { redirect_to fingerings_url }
      format.json { head :no_content }
    end
  end
end
