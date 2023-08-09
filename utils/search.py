'''
Provides helper functions for the search functionalities
'''

import pickle 

def find_queries(query):
    '''
    Searches pickled_taxid for the organism name.
    '''
    with open('data/pickled_taxid', 'rb') as taxid:
        data = pickle.load(taxid)
        result = data.get(query.lower(), None)
        if not result:
            return ''
        return {'taxid' : result[0], 'rna' : result[1], 'ill' : result[2]}