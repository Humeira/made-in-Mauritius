<template>
    <div class="container content">
        <div class="row">
            <div class="col">
                <div class="table-responsive p-30 m-t-30 ">
                    <table class="table table-bordered table-striped" id="project-table">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Username</th>
                            <th>Repo</th>
                            <th>Description</th>
                            <th>Language</th>
                        </tr>

                        </thead>
                        <tbody>
                        <tr v-for="(project, index) in projectData.projects">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <a :href="'http://github.com/' + project.github_username">{{project.github_username}}</a>
                            </td>
                            <td><a :href="project.repo_link">{{project.repo_name}}</a></td>
                            <td>{{project.description}}</td>
                            <td>
                                    <span class="badge"
                                          v-bind:class="[getColourTag(project.language_tag) ? toString(project.language_tag) : 'badge-secondary']">
                                     {{project.language_tag}}
                                    </span>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import projects from '../json/projects'
    import colours  from '../json/colours'
    export default {
        data () {
            return {
                projectData: projects,
                coloursData: colours,
                tag: false

            }
        },

        mounted: function () {
            $("#project-table").DataTable();
        },
        methods: {
            getColourTag: function (lang) {
                const self = this;
                let tempTag = true;
                const coloursList = this.coloursData.colours;
                const current_lang = lang.toString().toLowerCase();
                for (var i = 0; i < coloursList.length; i++) {
                    if (coloursList[i].name === current_lang) {
                        tempTag = true;
                        break;
                    }
                    else {
                        tempTag = false;
                    }

                }
                if (tempTag === true) {
                    return self.tag = true;
                }
                else {
                    return self.tag = false;
                }
            },

            toString: function (lang) {
                return lang.toString().toLowerCase();
            }
        }


    }
</script>


<style lang="css" scoped>
    .content {
        min-height: calc(100vh - 335px);
    }
    .m-t-30 {
        margin-top: 30px;
    }

    .p-30 {
        padding: 30px;
    }

    table th {
        text-align: center;
    }

    table {
        font-size: 18px;
    }

    table tr td:last-child {
        text-align: center;
        vertical-align: middle;
    }

    .dataTables_wrapper {
        /* prevent the whole thing from scrolling to keep the header in place */
        overflow: hidden;
    }
    .dataTables_wrapper .row .col-sm-12 {
        /* add scrolling just for the table body's wrapper */
        overflow-x: scroll;
        /* make the scrolling kinetic/inertial on iOS */
        -webkit-overflow-scrolling: touch;
    }

    @media screen and (max-width: 767px) {
        .table-responsive {
            border: 0;
        }
        .input-sm {
            font-size: 16px;
        }
    }

    .badge {
        color: #fff
    }
</style>