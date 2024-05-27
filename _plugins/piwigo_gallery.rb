# Jekyll  PiwigoGallery
# 
# Import Gallery from piwigo
#
# Author: Alessandro "alorenzi" Lorenzi <alorenzi@alorenzi.eu>
# Copyright: Copyright 2014 Alessandro Lorenzi
# License: GPLv2 
# Version: 1.0.0
#
require 'net/http'
require 'json' 
module Jekyll
  class PiwigoGallery < Liquid::Tag

    def initialize(tag_name, gallery_id, tokens)
      super
      @gallery_id = gallery_id
    end

#    def render(context)
#      page = context.registers[:page]
#      @gallery_id = page.albumID
#    end

    def render(context)
      @config = context.registers[:site].config['piwigogallery']
      @json = get_json
      @images = get_images
      page = '<div><div class="f-carousel" id="Carousel'+@gallery_id+'">'
      for image in @images
           page += render_image(image)
      end
      page += '</div></div>'
      page
      
    end

    def get_json
       baseurl = @config['baseurl']
       uri = URI(URI::DEFAULT_PARSER.escape(baseurl + "/ws.php?format=json&method=pwg.categories.getImages&cat_id=" + @gallery_id))
       return Net::HTTP.get(uri) # => String

    end

    def get_images
        my_hash = JSON.parse(@json)
        return my_hash['result']['images']
    end

    def render_image(image)
      comment = (image['comment'] =~ /vimeo/)
      if !comment.nil?
        element = image['comment']
      else
	     element = image['element_url']
      end
      square = image['derivatives']['square']['url']
      large = image['derivatives']['large']['url']
      caption = image['name']
      return '<div class="f-carousel__slide" data-thumb-src="'+square+'"><a href="'+element+'" data-fancybox="gallery'+@gallery_id+'" data-caption="'+caption+'"><img alt="" data-lazy-src="'+large+'" /></a></div>' 
    end
  end
end

Liquid::Template.register_tag('piwigo_gallery', Jekyll::PiwigoGallery)



