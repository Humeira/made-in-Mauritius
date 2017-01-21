<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="table-responsive p-t-20">
                    <table class="table table-bordered table-striped">
                        <thead>
                        <th>#</th>
                        <th>Username</th>
                        <th>Repo</th>
                        <th>Description</th>
                        <th>Language</th>
                        </thead>
                        <tbody>
                        <tr v-for="(project, index) in projectData.projects">
                            <td>{{ index + 1 }}</td>
                            <td>
                                <a :href="'http://github.com/' + project.github_username">{{project.github_username}}</a>
                            </td>
                            <td><a :href="project.repo_link">{{project.repo_name}}</a></td>
                            <td>{{project.description}}</td>
                            <td v-show>{{getColourTag(project.language_tag)}}</td>
                            <td><span class="label" v-bind:class="[tag ? getColourTag(project.language_tag) : 'label-default']">{{project.language_tag}}</span></td>
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
                tag: false,

            }
        },

        mounted: function () {
            this.$nextTick(function () {

            })
        },
        methods: {
            getColourTag: function (lang) {
                var self = this;
                const coloursList = this.coloursData.colours;
                let current_lang = lang.toString().toLowerCase();
                for(var i = 0; i<coloursList.length; i++){
                    if(coloursList[i].name ===  current_lang) {
                        self.tag = true
                        break
                    }
                    else {
                        self.tag = false
                    }

                }
                return current_lang
            }
        }


    }
</script>


<style>
    .p-t-20 {
        padding-top: 20px;
    }

    table th {
        text-align: center;
    }

    table {
        font-size: 18px;
    }
</style>