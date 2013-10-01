<?
require_once 'logger/error_log.php'; //enables printing log messages to logger/error_log.txt
require_once 'QueryOperation.php'; //class in charge of query operations

$request_method = strtolower($_SERVER['REQUEST_METHOD']);

$query = new QueryOperation();
$result = new stdClass();

    /**
	 * rather than cleaning during the query operation,
	 * this function iterates through each action object.
	 * @param $query
	 */
	function cleanAction( $query )
	{
		$magic_quotes_active = get_magic_quotes_gpc();

		foreach ( $query as $field=>$value )
		{
			if( is_string( $value ) )
			{
				if( $magic_quotes_active )
				{
					$value = stripslashes( $value );
				}

				$query->$field = mysql_real_escape_string( $value );
			}
		}

		return $query;
	}


	function get_url_id()
    {
        $strip =  basename($_SERVER['REQUEST_URI']);
        $strip = explode( "?", $strip );

        if( count($strip) > 0 )
        {
            return $strip[0];
        }

        return NULL;
    }

	switch( $request_method )
	{

		case 'get':
			$result = $query->getResults(new stdClass());
		break;


		case 'put':
			$put = file_get_contents("php://input", 'r' );
			console.log( 'put', $put );
			$params = cleanAction( json_decode( $put ) );
			$result = $query->updateRecords($params);

		break;

		case 'post':
			$put = file_get_contents("php://input", 'r' );
			$params = cleanAction( json_decode( $put ) );
			$result = $query->createRecord($params);
		break;

		case 'delete':
			$id = get_url_id();
			$params = new stdClass();
			$params->id = $id;
			$result = $query->destroyRecord($params);
		break;

	}

	echo json_encode( $result );
?>