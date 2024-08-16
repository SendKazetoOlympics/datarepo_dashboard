<script>
    async function getProjectList() {
        const project_list = await fetch('http://kazeserver:8084/api/projects/', {
            headers: {
                'Authorization': 'Token  <api_key>'
            }
            });
        return project_list;
    }
    const date = new Date();
    let project_list = getProjectList();
</script>

<h1>Document you workout here</h1>
<p>Today is {date.toDateString()}</p>