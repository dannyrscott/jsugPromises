<cfheader statuscode="200" statustext="Success" />

<!--- <cfset x = randRange(1,100)/>
<cfif  x lt 200>
	<cfthrow message="stuff done broke - #x#"/>
</cfif> --->
<cfset data = {}/>
<cfset responseString = serializeJSON( data ) />
<cfset responseBinary = toBinary( toBase64( responseString ) ) />

<cfheader name="content-length" value="#arrayLen( responseBinary )#" />
<cfcontent type="application/json" variable="#responseBinary#" />

