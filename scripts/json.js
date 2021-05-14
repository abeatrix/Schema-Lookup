$(document).ready(()=>{

    $.getJSON("https://raw.githubusercontent.com/sourcegraph/sourcegraph/main/schema/site.schema.json", (data) => {

        let row = "";

        $.each(data.properties, (k, v) => {
            const d = v.description, t = v.type, g = v.group;
            row += d.includes("DEPRECATED") ? "<tr class='removed p-2'>" :"<tr class='p-2'>";
            row += `<td>${k}</td><td>${d}</td><td>${t}</td><td>${g}</td></tr>`;
        })

        $("#site_config_1").append(row);

    })
})