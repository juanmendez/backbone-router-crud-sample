<?php
/**
 * 
 * crud operation class. 
 * @author Juan Mendez <info@flexnroses.com>
 *
 */
class QueryOperation
{
	function __construct()
	{
		$conn = mysql_connect("localhost", "user", "password") or die(mysql_error());
		mysql_select_db("backbonejs", $conn ) or die(mysql_error());
	}
	
	function __destruct()
	{
		mysql_close();
	}

	/**
	 * create a new record
	 * @param stdClass $params new record
	 */
	function createRecord( stdClass $params )
	{
		$query = "insert into recipes ( `page`, `title`, `rating` ) values ( '$params->page', '$params->title', '$params->rating' )";
		mysql_query( $query );
		
		$params->id = mysql_insert_id();
		
		return $params;		
	}
	
	/**
	 * get table records
	 * @param stdClass $params provides records offset and limit
	 */
	function getResults( stdClass $params )
	{
		$query = "SELECT `id`, `page`, `title`, `rating` FROM  `recipes`";
		$qResult = mysql_query($query); 
		$listResult = array();		
		
	  	while($row = mysql_fetch_array($qResult))
	  	{
	  		array_push($listResult, $row );
	  	}			
		
	  	return $listResult;
	}
	
	/**
	 * update record
	 * @param stdClass $params row to update record
	 */
	function updateRecords( stdClass $params )
	{	
		if( isset( $params->id ) )
		{
			$query = "UPDATE  recipes SET page = '$params->page', title = '$params->title', rating = '$params->rating'  WHERE id = $params->id";
			mysql_query($query);
			
			$response = array( 'success'=>true, 'data'=>true );
			
			return $params;
		}
	}
	
	/**
	 * delete record
	 * @param stdClass $params, only required attribute is the id
	 */
	function destroyRecord( stdClass $params )
	{
		if( isset( $params->id ) )
		{
			$query = "DELETE FROM recipes WHERE id = $params->id LIMIT 1";
			mysql_query($query);
			
			return $params;
		}
	}
	
	
}