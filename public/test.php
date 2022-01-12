<?php
 $matrix= array(array(1, 3, 5),
                array(3, 1, 4),
                array(5, 4, 1));
                function isSymmetric($mat)
                {
                    $tr = array(array());
                    for ($i = 0; $i < count($mat); $i++)
                        for ($j = 0; $j < count($mat); $j++)
                            $tr[$i][$j] = $mat[$j][$i];
                    for ($i = 0; $i < count($mat); $i++)
                        for ($j = 0; $j < count($mat); $j++)
                            if ($mat[$i][$j] != $tr[$i][$j])
                                return false;
                    return true;
                }          
     if(isSymmetric($matrix,3)){
     echo 'Yes';    
     }else{
         echo 'No';
     };
?>