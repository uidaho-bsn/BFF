class FiNosController < ApplicationController
  # GET /fi_nos
  # GET /fi_nos.json
  def index
    @fi_nos = FiNo.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @fi_nos }
    end
  end

  # GET /fi_nos/1
  # GET /fi_nos/1.json
  def show
    @fi_no = FiNo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @fi_no }
    end
  end

  # GET /fi_nos/new
  # GET /fi_nos/new.json
  def new
    @fi_no = FiNo.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @fi_no }
    end
  end

  # GET /fi_nos/1/edit
  def edit
    @fi_no = FiNo.find(params[:id])
  end

  # POST /fi_nos
  # POST /fi_nos.json
  def create
    @fi_no = FiNo.new(params[:fi_no])

    respond_to do |format|
      if @fi_no.save
        format.html { redirect_to @fi_no, notice: 'Fi no was successfully created.' }
        format.json { render json: @fi_no, status: :created, location: @fi_no }
      else
        format.html { render action: "new" }
        format.json { render json: @fi_no.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /fi_nos/1
  # PUT /fi_nos/1.json
  def update
    @fi_no = FiNo.find(params[:id])

    respond_to do |format|
      if @fi_no.update_attributes(params[:fi_no])
        format.html { redirect_to @fi_no, notice: 'Fi no was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @fi_no.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /fi_nos/1
  # DELETE /fi_nos/1.json
  def destroy
    @fi_no = FiNo.find(params[:id])
    @fi_no.destroy

    respond_to do |format|
      format.html { redirect_to fi_nos_url }
      format.json { head :no_content }
    end
  end
end
