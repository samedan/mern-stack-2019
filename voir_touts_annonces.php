

<?php
 /*   $mysongs = simplexml_load_file('Site 02.XML');
	echo $mysongs->BIEN[0]->NO_ASP;
*/
    $mysongs2 = simplexml_load_file('https://articole-smart.eu/web-design-brainiacs.ro/duval/xml/Site 02.XML');
   
   
	$i=0;
	foreach ($mysongs2 as $songinfo):
        $code_annonce=$songinfo->NO_ASP;
        $prix_annonce=$songinfo->PRIX;
		
		$descr_annonce=$songinfo->TEXTE_FR;
		$img_annonce="https://articole-smart.eu/web-design-brainiacs.ro/duval/xml/8242-01-".$code_annonce."-a.jpg";
		$type_annonce=$songinfo->CATEGORIE;
		$ville_annonce=$songinfo->VILLE_OFFRE;
		$prix_annonce=$songinfo->PRIX;
		/* echo 		$prix_annonce;*/
		$descr_annonce2=$songinfo->TEXTE_FR;
		$descr_annonce=utf8_decode($descr_annonce2);

		$loyer_annonce=$songinfo->LOYER;
		$ville_annonce=$songinfo->VILLE_OFFRE;
		$pieces_annonce=$songinfo->NB_PIECES;
		$surface_annonce=$songinfo->SURF_HAB;
		$exclusiv_annonce=$songinfo->TYPE_MANDAT;
		$type_loyer = $songinfo->TYPE_OFFRE;
		
		$num = intval($prix_annonce);
		$formattedNum = number_format($num, 0, ',', '&nbsp;');
		
		
		
		
	
		
		
		
		
		
			$i++;
		
		
		?>
		
		
		<div class="column-width2">
        
        <a href="#<?php echo $code_annonce; ?>" style="text-decoration:none; cursor:pointer">
        <div class="column-width2">
        <table cellpadding="0" cellspacing="0" border="0" class="column-width2" style="border: 1px solid #D3D3D3; " width="540">
        <tr>
        <td style="background-color:#F5F5F5; padding:3pt 3pt 3pt 5pt">
        <table cellpadding="0" cellspacing="0" border="0" width="100%" class="column-width2">
        <tr>
        <td width="100%">
         <?php 
		 echo "<h1 style=\"font-weight:bold\"><em> ".$type_annonce." - ".$ville_annonce."  </em></h1>";

		 
		 ?>
        </td>
        
        <td>
         <?php 

		 if ($prix_annonce!="")
		 {
		 	echo "<div class=\"prix_annonce_table\">";
		 
		 	echo "Vente&nbsp;:&nbsp;".$formattedNum."&euro;";
			 }
			 else 
			 {
				 if ($type_loyer == 13 )
				{
				  	 echo "<div class=\"prix_annonce_table_loyer\" >";
					 $num2 = intval(($loyer_annonce/12));
					 $formattedNum2 = number_format($num2, 0, ',', '&nbsp;');
					 echo "Loyer&nbsp;:&nbsp;".$formattedNum2."&euro;</div>";
				}
				else if($type_loyer == 11  or $type_loyer == 14)
								{
					echo "<div class=\"prix_annonce_table_loyer\" >";
					$num2 = intval($loyer_annonce);
					$formattedNum2 = number_format($num2, 0, ',', '&nbsp;');
					echo "Loyer&nbsp;:&nbsp;".$formattedNum2."&euro;</div>";
								}
				
			 }
		 
		 
		 
		 
		 ?>
        </tr></table></td>
        </tr>
        
        
        
        <tr>
        <td width="100%" style="padding:3pt 3pt 3pt 5pt; vertical-align:top" colspan="10">
      
      
        <?php
      	
        echo "
		
		
		<div class=\"description2\"><img style=\"float:left; margin-right:5px; margin-bottom:5px; width:200px\" src=\"".$img_annonce."\">".$descr_annonce."</div>"
		;
	
		
				
			
		
				
		?>
        </td>
        </tr>
        
        
        
        
        
        </table>
        </div></a><br>
       
        

        
        
        <?php 
		
			
    endforeach;
	
	if ( $i == 0 )
	{
	 echo "<div class=\"column-width2\" style=\"color: #fff;
					font-weight: bold;
					font-style: normal;
					color: #FF0000; padding:2px; width:100%\">
					Il n'y a pas actuellement de bien sur cette zone.</div>";	
	}
   
   
   
 ?>

