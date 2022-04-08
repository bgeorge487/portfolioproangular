/* 
Initial PUT code. Can be used in place of the above.
this.http.put(`${this.apiUri}/api/user/${this.id}`,
    JSON.stringify({
      body: '',
      title: ''
    })
    ).subscribe(
      (response) => {this.user = response}
    ) */

    /* 
    Initial POST code. Can be used in place of what's above.
    this.http.post(
      `${this.apiUri}/api/user`,
      JSON.stringify({
        body: 'id',
        title: ''
      })
    ).subscribe(
      (response) => {this.user = response}
    ) */

    /*
    Above you'll find some older code for the PUT and POST functions in the src/app/user/userservice directory. use to replace 
    current code if this is preferrable.
    */