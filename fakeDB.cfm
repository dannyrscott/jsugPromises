

<cfheader statuscode="200" statustext="Success" />

<cfparam name="url.error" default="false"/>
<cfparam name="url.text" default=""/>
<cfparam name="url.wait" default="5"/>

<cfset sleep(url.wait * 1000)/>

<cfif url.error>
	<cfthrow message="stuff done broke"/>
</cfif>
<cfset data = {text = url.text}/>
<cfset responseString = serializeJSON( data ) />
<cfset responseBinary = toBinary( toBase64( responseString ) ) />

<cfheader name="content-length" value="#arrayLen( responseBinary )#" />
<cfcontent type="application/json" variable="#responseBinary#" />

