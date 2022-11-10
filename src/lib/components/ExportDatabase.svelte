<script>
	import { localDB } from '$lib/db';

	function downloadDB() {
		localDB.allDocs({ include_docs: true }, (error, doc) => {
			if (error) console.error(error);
			else {
				download(
					JSON.stringify(doc.rows.map(({ doc }) => doc)),
					`daily451_${new Date().toISOString().slice(0, 10)}.db`,
					'text/plain'
				);
			}
		});
	}

	function download(data, filename, type) {
		var file = new Blob([data], { type: type });
		if (window.navigator.msSaveOrOpenBlob)
			// IE10+
			window.navigator.msSaveOrOpenBlob(file, filename);
		else {
			// Others
			var a = document.createElement('a'),
				url = URL.createObjectURL(file);
			a.href = url;
			a.download = filename;
			document.body.appendChild(a);
			a.click();
			setTimeout(function () {
				document.body.removeChild(a);
				window.URL.revokeObjectURL(url);
			}, 0);
		}
	}
</script>

<button on:click={downloadDB}>Export DB</button>
