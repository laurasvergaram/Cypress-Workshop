describe('empty spec', () => {
    it('creation', () => {
      cy.request({
        method: 'POST', 
        url: 'https://petstore.swagger.io/v2/pet',
        body: {
            "id": 0,
            "category": {
                "id": 0,
                "name": "string"
            },
            "name": 'pixie',
            "photoUrls": [
                "string"
            ],
            "tags": [
                {
                "id": 0,
                "name": "string"
                }
            ],
            "status": "available"
        }
    }).then((response) => {
      expect(response.status).equal(200)
    })

    })

    it('find', () => {
      cy.request({
        method: 'GET', 
        url: 'https://petstore.swagger.io/v2/pet/0',
        header: {api_key:123},
        failOnStatusCode:false
      }).then((response) => {
        expect(response.body).to.be.a('object')
        expect(response.duration).to.be.lessThan(10000000)
        // expect(response.body.name).equal('pixie')

      })
    })

    it('delete', () => {
      cy.request({
        method: 'DELETE', 
        url: 'https://petstore.swagger.io/v2/pet/0',
        header: {api_key:123},
        failOnStatusCode:false
      })
    })


  })