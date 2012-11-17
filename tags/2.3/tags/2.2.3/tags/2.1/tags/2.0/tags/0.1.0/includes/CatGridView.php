<?php
/**
Functions to retrieve the posts, get the Title, tbe first image and 
to generate thumbnails.
Author : Anshul Sharma (contact@anshulsharma.in)
 */
 
 if(preg_match('#' . basename(__FILE__) . '#', $_SERVER['PHP_SELF'])) { die('Sorry, Dude. You are not allowed to call this page directly.'); }
 
 require_once 'CatGridData.php';
 
 class CatGridView{
 	
    private $params = array();
    private $cgoutput;
	private $cgposts;
	private $cgdata;
	private $size = array();
	
	
	public function __construct($atts) {
        $this->params = $atts;
        $this->cgdata = new CatGridData($atts);
		$this->cg_build_output();

    }
	
	 private function cg_build_output(){
	    $this->cgoutput='<div class="cgview">';
		$this->cgoutput.= '<ul>'."\n"; 
        //Posts loop
        foreach ($this->cgdata->cg_get_posts() as $single):
                $this->cgoutput .= $this->cg_build_item($single)."\n";
        endforeach;
		$this->cgoutput.= '</ul></div>'."\n";
		
    }

    /*
	Build each item
     */
    private function cg_build_item($single){
		$size=array();
		$size=$this->cg_get_size();
		
        $cgitem='<li id="cg-'.$single->ID.'" style="width:'.$size[0].'px;height:'.$size[1].'px;">';
		
        $cgitem.= $this->cg_get_image($single);
		
		if(((int)$size[0]>=100||(int)$size[1]>=100) && $this->params['showtitle'])
		$cgitem.= $this->cg_get_title($single);
		
		$cgitem.= '</li>';
		
		$this->cg_active_post = $single->post_content;
		
        return $cgitem;
    }
	
	private function cg_get_image($single){
		$cg_img = '';
  		ob_start();
  		ob_end_clean();
 		$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $single->post_content, $matches);
 		$cg_img = $matches [1] [0];

  		if(empty($cg_img)){ //Defines a default image
    			$cg_img = "/default.jpg";
		}
		
		$size=array();
		$size=$this->cg_get_size();
			
			if((!preg_match('/\b[0-9]{3}\b/',$this->params['quality']))||(int)$this->params['quality']>100)
				$this->params['quality']='75';
		//uses TimThumb to generate thumbnails on the fly	
		global $cg_url;	
		$returnlink = ($this->params['lightbox'])? ('"'.$cg_url.'/includes/CatGridPost.php?ID='.$single->ID.'" class="cgpost"') : ('"'.get_permalink($single->ID)).'"';	
		return '<a href='.$returnlink.'><img src="'.plugins_url().'/catgrid/includes/timthumb.php?src='.$cg_img.'&h='.$size[1].'&w='.$size[0].'&zc=1&q='.$this->params['quality'].'" alt="'.$single->post_title.'" title="'.$single->post_title.'"/></a>';
		

	}
	
	private function cg_get_title($single){
		global $cg_url;	
		$returnlink = ($this->params['lightbox'])? ('"'.$cg_url.'/includes/CatGridPost.php?ID='.$single->ID.'" class="cgpost"') : ('"'.get_permalink($single->ID)).'"';
		$cgfontsize=$this->cg_get_font_size();
		$cgtitle='<div id="cgback" class="cgnojs"></div><div id="cgtitle" class="cgnojs"><p style="font-size:'.$cgfontsize.'px;line-height:'.(1.2*$cgfontsize).'px;"><a href='.$returnlink.'>'.$single->post_title.'</a></p></div>';
		return $cgtitle;
	}
	
	public function display(){
        return $this->cgoutput;
    }
	
	public function cg_get_size(){
		$size=array();
		switch ($this->params['size']) {
			case 'medium':
				$size=array('180','180');
				break;
			case 'large':
				$size=array('300','300');
				break;
			case 'thumbnail':
				$size=array('140','140');
				break;
			default:
				if(preg_match('/\b[0-9]{1,4}[xX][0-9]{1,4}\b/',$this->params['size']))
					$size = preg_split('/[xX]+/',$this->params['size'],-1,PREG_SPLIT_NO_EMPTY);	
				else
					$size=array('140','140');					
			}
	
	return $size;
	}
	
//Adjust fontsize according to the thumbnail size. Dont show title if either height or width < 100px	
	public function cg_get_font_size(){
		$size=array();
		$size=$this->cg_get_size();
		$cgfontsize = (4/50)*(int)$size[1];
		if ($cgfontsize>16)
			return 16;
		if ($cgfontsize<8)
			return NULL;
		else
			return $cgfontsize;
	}
	
}
	